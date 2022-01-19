//?Props

export function formatDate(date) {
    return date.toLocaleDateString();
}

export function Avatar(props) {
    return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

export function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

export function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

export const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
        name: "Hello Kitty",
        avatarUrl: "https://placekitten.com/g/64/64",
    },
};
