interface MajorCredits {
  credits: number;
  brand: "majorCredits";
}

interface MinorCredits {
  credits: number;
  brand: "minorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "majorCredits",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minorCredits",
  };
}
