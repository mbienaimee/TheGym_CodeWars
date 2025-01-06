function reverse(string){
    //your code here
    const result = string.split(' ').reverse().join(' ')
  return result
  }
  console.log(reverse("Hello World"))
  console.log(reverse('I am an expert at this'))