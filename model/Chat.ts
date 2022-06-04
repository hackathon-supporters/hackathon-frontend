type Accepted = 1;
type Wait = 0;

export interface ChatRoom {
    // 0 = 承認待ち or 1 = 承認済み
    accepted_status: Accepted|Wait
    //room id
    id:string,
    //就活生のid
    received_from:string
}
