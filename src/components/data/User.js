class User {
    constructor() {
        this.user = {}
        this.auth = [
            { email: 'contact@korboon.com', password: '0' },
            { email: 'yee@yee.com', password: '0' },
        ]
    }

    login(email = '', password = '') {
        const valid = this.auth.filter(e => e.email === email)
        if (!valid[0]) return false
        if (valid[0].password !== password) return false
        localStorage.setItem('email', valid[0].email)
        return true
    }

    logout() {
        localStorage.removeItem('email')
    }

    getAuth() {
        const email = localStorage.getItem('email')
        if (!email) return false
        return true
    }
}

const user = new User()
export default user