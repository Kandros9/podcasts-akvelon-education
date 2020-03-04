import moment from "moment";

export const episodeDuration = (sec: number) => {
    let d = moment.duration({s: sec});
    return moment().startOf('day').add(d).format('HH:mm:ss')
};