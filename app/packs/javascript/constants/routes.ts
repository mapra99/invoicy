// These routes must be consistent with the ones defined
// on the server side if needed (config/routes.rb).

export const ROUTES = {
  ROOT: '/',
  AUTH: {
    SIGN_IN: '/users/login',
    SIGN_UP: '/users/signup',
    CREATE_USERS: '/users',
    SIGN_OUT: '/users/sign_out',
    AFTER_SIGN_OUT: '/',
  },
  DASHBOARD: {
    INVOICES_INDEX: '/dashboard/invoices',
    NEW_INVOICE: '/dashboard/invoices/new',
    SHOW_INVOICE: '/dashboard/invoices/:uuid',
    EDIT_INVOICE: '/dashboard/invoices/:uuid/edit',
  },
  PUBLIC: {
    SHOW_INVOICE: '/invoices/:externalId',
  },
  API: {
    CURRENT_USER: '/api/users/current',
    INVOICES: {
      INDEX: '/api/invoices',
      CREATE: '/api/invoices',
      SHOW: '/api/invoices/:uuid',
      DESTROY: '/api/invoices/:uuid',
      UPDATE: '/api/invoices/:uuid',
      UPDATE_STATUS: '/api/invoices/:uuid/update_status',
    },
    PUBLIC: {
      INVOICES: {
        SHOW: '/api/public/invoices/:externalId',
      },
    },
  },
};
