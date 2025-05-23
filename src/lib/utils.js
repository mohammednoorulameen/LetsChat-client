export function formatMassageTime(date){
    return new Date(date).toLocaleTimeString('en-US',{
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
}

export function formatMassageDate(date){
    return new Date(date).toLocaleDateString('en-US',{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    })
}