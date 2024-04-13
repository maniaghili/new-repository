let $ = document
const registerForm = $.querySelector('.register-form')
const nameInput = $.querySelector('.name-input')
const passwordInput = $.querySelector('.password-input')
const emailInput = $.querySelector('.email-input')

let db = null
let objectStore = null

window.addEventListener('load', () => {
    let DBOpenReq = indexedDB.open('SabzLearn', 16)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err);
    })
    
    DBOpenReq.addEventListener('success', (event) => {
        db = event.target.result
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

    let tx = db.transaction('users', 'readwrite')

    tx.addEventListener('error', (err) => {
        console.warn('Tx Error:', err)
    })

    tx.addEventListener('Tx Success', (event) => {
        console.log(event)
    })

    let store = tx.objectStore('users')
    let request = store.add(newUser)
    clearInputs()

    request.addEventListener('error', (err) => {
        console.warn('Request Error:', err)
    })

    request.addEventListener('Request Success', (event) => {
        console.log(event)
    })

})

function clearInputs () {
    nameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''
}