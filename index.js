const OneSignal = require('onesignal-node');
const client = new OneSignal.Client('45deef89-1ea9-4d2e-9434-a3de791e42f7', 'ZTMyMzc4ZTMtMWYyOS00ODE2LWExNGUtMDE5Y2Q1NTc0NmUz');

const notification = {
    contents: {
        'tr': 'Yeni bildirim',
        'en': 'New notification',
        'pt': 'Sua encomenda esta chegando!'
    },
    headings: {
        'en': 'English Title',
        'es': 'Spanish Title',
        'pt': 'BringIt'
    },
    include_player_ids: ['3593631c-0506-498d-a411-72851fe8d59c'],
    android_accent_color: "FFF200",
    large_icon: "https://cdn.iconscout.com/icon/free/png-256/delivery-box-1835709-1556268.png"
};

/*client.createNotification(notification)
.then(response => {
    console.log(response.body)
})
.catch(e => {
    console.log(e)
});*/

client.viewDevices().then(response => {
    console.log(response.body);
}).catch(e => {
    console.log(e)
});
