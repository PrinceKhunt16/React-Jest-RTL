type HelloProps = {
    name?: string
}

const Hello = (props: HelloProps) => {
    return (
        <div>
            Hello {props.name}
        </div> 
    )
}

export default Hello;