/**
 * An Array of public routes, anyone can access
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

/**
 * An Array of routes for authentication, they will
 * redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register", "/error"];


/**
 * Prefix for Api Authentication Routes
 * These routes need to be accessed for both logged in
 * and logged out users
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * Default path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";



