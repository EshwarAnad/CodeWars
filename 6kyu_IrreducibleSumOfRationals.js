// 6kyu - Irreducible Sum of Rationals

// You will have a list of rationals in the form

// lst = [ [numer_1, denom_1] , ... , [numer_n, denom_n] ]
// or

// lst = [ (numer_1, denom_1) , ... , (numer_n, denom_n) ]
// where all numbers are positive integers. You have to produce their sum N / D in an irreducible form: this means that N and D have only 1 as a common divisor.

// Return the result in the form:

// [N, D] in Ruby, Crystal, Python, Clojure, JS, CS, PHP, Julia
// Just "N D" in Haskell, PureScript
// "[N, D]" in Java, CSharp, TS, Scala, PowerShell
// "N/D" in Go, Nim
// {N, D} in C++, Elixir
// "{N, D}" in C
// Some((N, D)) in Rust
// Some "N D" in F#, Ocaml
// c(N, D) in R
// (N, D) in Swift
// '(N D) in Racket
// If the result is an integer (D evenly divides N) return:

// an integer in Ruby, Crystal, Elixir, Clojure, Python, JS, CS, PHP, R, Julia
// Just "n" (Haskell, PureScript)
// "n" Java, CSharp, TS, Scala, PowerShell, Go, Nim
// {n, 1} in C++
// "{n, 1}" in C
// Some((n, 1)) in Rust
// Some "n" in F#, Ocaml,
// (n, 1) in Swift
// n in Racket
// If the input list is empty, return

// nil/None/null/Nothing
// {0, 1} in C++
// "{0, 1}" in C
// "0" in Scala, PowerShell, Go, Nim
// O in Racket
// Example:
// [ [1, 2], [1, 3], [1, 4] ]  -->  [13, 12]

//     1/2  +  1/3  +  1/4     =      13/12
// Note
// See sample tests for more examples and the form of results.

function sumFracts(l) {
  if (!l.length) return null;
  
  let denom = l.reduce((result, item) => result * item[1], 1)
  let num = l.reduce((result, item) => result + item[0] * denom / item[1], 0)
  
  for (let i = 2; i <= Math.sqrt(denom); i++) {
    while (denom % i == 0 && num % i == 0) {
      denom /= i;
      num /= i;
    }
  }
  return denom == 1 ? num : [num, denom];
}

