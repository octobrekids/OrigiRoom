class User {
    constructor() {
        this.user = {}
        this.auth = [
            { email: 'contact@korboon.com', password: '0' }
        ]
    }

    login(email = '', password = '') {
        const valid = this.auth.some(e => e.email === email)
        if (!valid) return false
        if (valid.password !== password) return false
        localStorage.setItem('email', valid.email)
    }

    logout() {
        localStorage.removeItem('email')
    }

    getAuth () {
        const email = localStorage.getItem('email')
        if (!email) return false
        return true
    }
}

const user = new User()
export default user