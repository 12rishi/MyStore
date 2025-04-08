import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const publicRoutes = ["/", "/products(.*)"];
const isProtectedRoute = createRouteMatcher(publicRoutes);
const protectAdminRoute = createRouteMatcher(["/admin(.*)"]);
export default clerkMiddleware(async (auth, req: NextRequest) => {
  const isAdmin = (await auth()).userId === process.env.ADMIN_ID;
  if (protectAdminRoute(req) && !isAdmin) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const { userId, redirectToSignIn } = await auth();

  if (!userId && !isProtectedRoute(req)) {
    // Add custom logic to run before redirecting

    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
