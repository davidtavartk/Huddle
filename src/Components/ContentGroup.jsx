import React from 'react';
import ContentEach from './ContentEach';
import photo from "../assets/grow_together.png"
import photo1 from "../assets/grow_together1.png"
import photo2 from "../assets/grow_together2.png"

const ContentGroup = () => {
    const textContent = ["Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ",
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
    ]

    return (
        <div>
            <ContentEach title="Grow Together" text={textContent[0]} image={photo}/>
            <ContentEach title="Flowing Conversations" text={textContent[1]} image={photo1} isReverse={true}/>
            <ContentEach title="Your Users" text={textContent[2]} image={photo2} />

        </div>
    );
};

export default ContentGroup;