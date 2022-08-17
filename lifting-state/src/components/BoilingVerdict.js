export default function BoilingVerdict({celsius=0}) {
    if (celsius >= 100) {
        return <p>The wate would boil</p>
    } 
    return <p>Water would not boil</p>
}