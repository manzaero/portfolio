export const request = async () => {
    const res = await fetch('https://d036968716ddca81.mokky.dev')
    const json = await res.json()
    return json
}