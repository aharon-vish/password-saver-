export const validationAuthRules = {
    email: {
        presence: {
            message: '^Please enter an email address'
        },
        format: {
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: '^Please enter a valid email address'
        }
    },

    password: {
        presence: {
            message: '^Please enter a password'
        },
        length: {
            minimum: 5,
            message: '^Your password must be at least 5 characters'
        }
    }
};
export const validationNewPasswordhRules = {
    service: {
        length: {
            minimum: 1,
            message: '^Your service must be at least 1 characters'
        }
    },
    userName:{
        length: {
            minimum: 1,
            message: '^Your user name must be at least 1 characters'
        }
    },
    password: {
        length: {
            minimum: 1,
            message: '^Your password must be at least 1 characters'
        }
    }
};