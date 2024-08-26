const input = document.getElementById('notif');

function notification() {
Notification.requestPermission().then(function(result) {

if (result === 'granted') {

popupNotif();

} else {

console.log('Permission denied');

}



});
}
function popupNotif() {
const notification = new Notification ('New Notification', {
body: input.value || 'This is a default notification message.'
});
notification.onclick = function() {
console.log('Notification clicked!');
};
}