let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver{
  constructor(name, dateString){
    this.name=name;
    this.startDate = new Date(dateString)
  }
  
  yearsExperienceFromBeginningOf(startYear){
    return startYear - 1900 - this.startDate.getYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation=beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  
}