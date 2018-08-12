const dna1 = "AAAA";
const dna2 = "ATTGC";
const dna3 = "GTAT";

const complementaryDNABase = 
{
    "T" : "A",
    "A" : "T",
    "G" : "C",
    "C" : "G"
}

function DNAStrand(dna) {
    let complementaryDNA = [];
    for(let i = 0; i < dna.length; i++){
        complementaryDNA.push(complementaryDNABase[dna[i]])
    }
    return complementaryDNA.join('');
}

console.log(DNAStrand(dna3));