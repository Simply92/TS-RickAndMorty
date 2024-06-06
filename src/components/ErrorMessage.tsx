import { PropsWithChildren } from "react"

const ErrorMessage = ({ children }: PropsWithChildren) => {
    return (
        <p className="text-center my-4 bg-red-500 text-white font-bold p-3 uppercase text-sm rounded-md">
            {children}
        </p>
    )
}

export default ErrorMessage
