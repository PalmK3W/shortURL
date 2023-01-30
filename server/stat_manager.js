class StatManager{
    static Timestamp(){
        const today = new Date();
        let date = today.getDate();
        let month = today.getMonth();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November","December"]
        let year = today.getFullYear();
        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        let sumdate =  date +" "+months[month]+" "+year+" , "+hour+" : "+min+" : "+sec ;
        return sumdate;
    }
}
module.exports = StatManager;