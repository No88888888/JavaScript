function getFullName() {
    return this.firstName + this.lastName
}

const me = {
    firstName : 'kim',
    lastName : 'jingho',
    getFullName : getFullName,
}

console.log(getFullName())

console.log(me.getFullName())