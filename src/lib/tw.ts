
/**
 * A helper function for tailwind classes. It removes duplicate spaces and newlines.
 * @returns Cleaned oneline string classes.
 * @example
 * <NavLink className={tw`
 *          flex flex-col px-3 py-2
 *          ${isActive ? activeStyles : inActiveStyles}
 *          bg-blue-600 hover:bg-blue-500 active:bg-blue-700
 *      `}
 * </NavLink>
 */
export default function tw(literals: TemplateStringsArray, ...placeholders: string[]) {
    const oneLine = (literals.join(" ") + " " + placeholders.join(" "))
    return oneLine.replace(/\s\s+/g, " ").trim();
}
