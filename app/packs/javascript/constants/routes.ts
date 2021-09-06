// These routes must be consistent with the ones defined on the server side if needed (config/routes.rb).

export const ROUTES = {
  DASHBOARD: {
    INVOICES_INDEX: "/dashboard/invoices"
  },
  AUTH: {
    SIGN_IN: "/users/login",
    SIGN_UP: "/users/signup",
    CREATE_USERS: "/users",
  },
  API: {
    CURRENT_USER: "/api/users/current"
  }
}
