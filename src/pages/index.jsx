import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import "./Roompage.css"; // Import styles

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appId = 1642706611;
        const serverSecret = "cb421bb7585b27ae3e25cd3a933dbe14";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Tushar Mal"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                    url: `http://localhost:3000/room/${roomId}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: false,
            
        });
    };

    return (
        <div className="room-container">
            <div className="video-box" ref={myMeeting} />
        </div>
    );
};

export default RoomPage;
