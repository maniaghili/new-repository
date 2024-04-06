'uze strite'

let $ = document
const registerForm = $.querySelector('.register-form')
const nameInput = $.querySelector('.name-input')
const passwordInput = $.querySelector('.password-input')
const emailInput = $.querySelector('.email-input')
const usersTableElem = $.querySelector('table')

let db = null
let objectStore = null

window.addEventListener('load', () => {

    let DBOpenReq = indexedDB.open('SabzLearn', 18)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err);
    })

    DBOpenReq.addEventListener('success', (event) => {
        db = event.target.result
        getUsers()
        console.log('Success', event.target.result);
    })

    DBOpenReq.addEventListener('upgradeneeded', (event) => {

        db = event.target.result

        console.log('Old V:', event.oldVersion);
        console.log('New V:', event.newVersion);

        if (!db.objectStoreNames.contains('users')) {
            objectStore = db.createObjectStore('users', {
                keyPath: 'userID'
            })
        }

        if (db.objectStoreNames.contains('courses')) {
            db.deleteObjectStore('courses')
        }

        // db.createObjectStore('courses')

        console.log('upgrade', db.objectStoreNames);

    })


})


registerForm.addEventListener('submit', event => {
    event.preventDefault()

    let newUser = {
        userID: Math.floor(Math.random() * 9999),
        name: nameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
    }

    let tx = createTX('users', 'readwrite')

    tx.addEventListener('complete', (event) => {
        console.log('Tx', event)
    })

    let store = tx.objectStore('users')
    let request = store.add(newUser)

    request.addEventListener('error', (err) => {
        console.warn('Request Error:', err)
    })

    request.addEventListener('success', (event) => {

        console.log('Request', event)
        clearInputs()
        getUsers()
    })



})

function clearInputs() {
    nameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''
}

function getUsers() {

    let tx = createTX('users', 'readonly')

    tx.addEventListener('complete', (event) => {
        console.log('Tx', event)
    })

    let store = tx.objectStore('users')
    let request = store.getAll()

    request.addEventListener('error', (err) => {
        console.warn('Get Request Error:', err)
    })

    request.addEventListener('success', (event) => {

        let allUsers = event.target.result

        usersTableElem.innerHTML = `<tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Password</th>
                                        <th>Email</th>
                                    </tr>`

        usersTableElem.innerHTML += allUsers.map(user => {
            return `<tr>
                        <td>${user.userID}</td>
                        <td>${user.name}</td>
                        <td>${user.password}</td>
                        <td>${user.email}</td>
                    </tr>`
        }).join('')

        // console.log(usersTemplateArray);

    })

}

function createTX (storeName, mode) {
    let tx = db.transaction(storeName, mode)

    tx.addEventListener('error', (err) => {
        console.warn('Tx Error:', err)
    })

    return tx
}



// DRY => Don't Repeat Yourselfadasd





egewerhtre

erggreggregegeewghrthth

r
thrhr

trhrt
vevev
evf  



bccvbcbv




