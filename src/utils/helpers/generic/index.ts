import dayjs from "dayjs";


/**
 * Calculates the remaining time in milliseconds from the current time to a specified "till" time.
 * If the current time is after the "till" time, it returns -1.
 *
 * @param {string | Date | dayjs.Dayjs} tillDate - The target date and time to calculate the remaining time until.
 * @returns {number} - The remaining time in milliseconds, or -1 if the current time is after the "till" time.
 */
export const getRemainingTimeInMilliseconds = (tillDate?: string | Date | dayjs.Dayjs): number => {
    const now = dayjs();
    const till = dayjs(tillDate);

    const difference = till.diff(now, 'millisecond');

    return difference >= 0 ? difference : -1;
};