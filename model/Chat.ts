

export interface ChatRoom {
    // 0 = 承認待ち or 1 = 承認済み
    state: number,
    //room id
    room_id:string,
    //就活生のid
    student_id:string,
    //社会人のid
    society_id:string,
}
