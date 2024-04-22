const userLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                username: username,
                password: password,
                email: 'amin@gmail.com'
            })
        }, 4000)
    })

}

const userCourses = (username) => {
    console.log('User username:', username);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 21, title: 'Js Expert', price: 'Free' },
                { id: 34, title: 'Redux Expert', price: 'Free' },
            ])
        }, 3000)
    })

}

const mainCourseInfo = (courseTitle) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 34,
                title: 'Redux Expert',
                price: 'Free',
                teacher: 'Saeedi rad',
                student: 2291
            })
        }, 2000)
    })

}

console.log('سایت برای کاربر لود شد')

// const loginInfos = userLogin('amin_seaadi', '0101', (userObject) => {
//     console.log('کاربر لاگین شد:', userObject);

//     userCourses(userObject.username, (userAllCourses) => {
//         console.log('User Courses: ', userAllCourses);

//         mainCourseInfo(userAllCourses[1].title, (mainInfos) => {
//             console.log('Main Course Infos:', mainInfos);
//         })
//     })
// })

// userLogin()
//     .then(userObject => userCourses(userObject.username))
//     .then(userAllCourses => mainCourseInfo(userAllCourses[1].title))
//     .then(mainInfos => console.log(mainInfos))
    

async function runUserCodes () {
    let userInfos = await userLogin('amin_saeedi', 0101)
    let userAllCOurses = await userCourses(userInfos.username)
    let mainInfos = await mainCourseInfo(userAllCOurses[1].title)

    console.log(mainInfos);
}

runUserCodes()

console.log('کاربر با موفقیت لاگین شد');