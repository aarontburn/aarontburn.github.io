import { ReactNode } from "react";

export const Spacer = ({ size = "auto" }) => {
    return <div style={{ marginRight: size }}></div>;
}


export const Bold = ({ children }: { children?: ReactNode }) => <span style={{ fontWeight: 550 }}>{children}</span>;
export const Italic = ({ children }: { children?: ReactNode }) => <span style={{ fontStyle: "italic" }}>{children}</span>
export const Link = ({ link, children }: { link: string, children?: ReactNode }) => <a
    style={{ color: 'blue', cursor: 'pointer' }}
    href={link}
    target='_blank'
>
    {children}
</a>

export function NavButton({ displayText, callback, fontSize, image, width }: { displayText: string, callback: () => void, fontSize: string, image?: string, width?: string }) {
    if (image === undefined) {
        return <h2 className="nav-button" style={{ fontSize: fontSize, width: width }} onClick={callback}>{displayText}</h2>
    }
    return <div onClick={callback} className="nav-button logo-nav" style={{ width: width }}>
        <img style={{ width: fontSize, height: fontSize }} src={image} alt="Logo" />
        <h2 style={{ fontSize: fontSize }}>{displayText}</h2>
    </div>
}


export function List({ text, children }: { text: string | ReactNode, children?: ReactNode }) {
    return <>
        <li>{text}</li>
        <div style={{ marginLeft: '1.5em', marginBottom: '0.5em' }}>
            {children}
        </div>
    </>
}


const LINKEDIN_URL: string = 'https://www.linkedin.com/in/aaronburnham/';
const GITHUB_URL: string = 'https://github.com/aarontburn';


export function openLink(url: string | 'LinkedIn' | 'GitHub' | undefined) {
    if (url === undefined) {
        return;
    }

    let newWindow;
    if (url === "LinkedIn") {
        newWindow = window.open(LINKEDIN_URL, '_blank', 'noopener,noreferrer');
    } else if (url === 'GitHub') {
        newWindow = window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
    } else {
        newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    }

    if (newWindow) {
        newWindow.opener = null;
    }
}


