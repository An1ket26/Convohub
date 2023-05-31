const serverStore=require('../serverStore')
const friendsUpdate=require('./updates/friends')
const newConnectionHandler=async(socket,io)=>{
    const userDetails=socket.user;

    serverStore.addNewConnectedUser({
        socketId:socket.id,
        userId:userDetails.userId,
    });
    friendsUpdate.updateFriendsPendingInvitation(userDetails.userId);
    friendsUpdate.updateFriends(userDetails.userId);
}

module.exports=newConnectionHandler;