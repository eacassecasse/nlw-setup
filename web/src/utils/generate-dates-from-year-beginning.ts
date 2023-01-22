import dayjs from "dayjs";

export function generateDatesFromYearBeginning() {
    //TODO transformar data do dayjs or do javascript para poder comparar
    const firstDayOfTheYear = dayjs().startOf('year');
    const endDate = new Date();

    let dates = [];
    let compareDate = firstDayOfTheYear;

    while (compareDate.isBefore(endDate)) {
        dates.push(compareDate.toDate());
        compareDate = compareDate.add(1, 'day')
    }

    return dates;
}