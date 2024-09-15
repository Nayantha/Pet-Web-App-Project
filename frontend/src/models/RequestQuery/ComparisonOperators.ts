export enum ComparisonOperators {
    Equal = "=",
    NOT_Equal = "!= ",
    Greater_than = ">",
    Greater_than_or_equal = ">=",
    Less_than = "<",
    Less_than_or_equal = "<=",
    Like_OR_Contains = "~",
    NOT_Like_OR_Contains = "!~",
    Any_OR_At_least_one_of_Equal = "?=",
    Any_OR_At_least_one_of_NOT_equal = "?!=",
    Any_OR_At_least_one_of_Greater_than = "?>",
    Any_OR_At_least_one_of_Greater_than_or_equal = "?>=",
    Any_OR_At_least_one_of_Less_than = "?<",
    Any_OR_At_least_one_of_Less_than_or_equal = "?<=",
    Any_OR_At_least_one_of_Like_OR_Contains = "?~",
    Any_OR_At_least_one_of_NOT_Like_OR_Contains = "?!~"
}