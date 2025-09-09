import SecondHeader from "../components/SecondHeader"

interface SecondLayoutTypes {
  children : React.ReactNode;
}

function SecondLayout({ children }: SecondLayoutTypes) {
    return (
        <div>
            <SecondHeader />
            <div>{children}</div>
        </div>
    )
}

export default SecondLayout