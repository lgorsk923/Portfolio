export interface ItemCardProps {
    title: string;
    description: string;
    imageSrc: string;
    link: string;
}

export const AppDevExperience: ItemCardProps[] = [
    {
        title: "CallForward",
        description: "An independent Next.js project. Call forward is a responsive scheduling application providing Call forwarding services. It allows users the ability to build an on-call team with a number in a zip code of their choice, and creating a schedule that will automatically forward any calls received at the selected number to the appropriate user.",
        imageSrc: "/call-forward-thumbnail.png",
        link: "/pages/app-dev/call-forward"
    },
    {
        title: "In Touch Pharmaceuticals",
        description: "I have worked with ITP for the last 3 years as a contracted developer to complete several projects including transforming legacy customer facing applications into an easy-to-use, modern system.",
        imageSrc: "/in-touch.png",
        link: "/pages/app-dev/itp"
    }
]