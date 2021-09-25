// These routes must be consistent with the ones defined on the server side if needed (config/routes.rb).

export const ROUTES = {
  ROOT: "/",
  DASHBOARD: {
    INVOICES_INDEX: "/dashboard/invoices",
    NEW_INVOICE: "/dashboard/invoices/new"
  },
  AUTH: {
    SIGN_IN: "/users/login",
    SIGN_UP: "/users/signup",
    CREATE_USERS: "/users",
    SIGN_OUT: "/users/sign_out",
    AFTER_SIGN_OUT: "/"
  },
  API: {
    CURRENT_USER: "/api/users/current",
    INVOICES: {
      INDEX: "/api/invoices"
    }
  }
}
