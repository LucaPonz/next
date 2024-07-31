export default function Card(props: {children : React.ReactNode}) {
    return(
        <div className="h-full w-full rounded-[8px] shadow-md border-small border-default-200 dark:border-default-100 relative">{props.children}</div>
    )
} 