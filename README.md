# Portfolio HTML/CSS/JS/REACT

My portfolio/project website

##HOW I HAVE CODED IT
I have used mobile first approach to create this app, also tried to make code as self-explanatory as
best I could, I have tried to separate the components, although I did not go to deep with it as 
I believe it would be an overkill for such a small project

##ISSUES

Some issues that I have run into, and how I dealt with them

### `Design/Idea`
>Design/Idea was my biggest enemy while making this project, I just had a basic Idea how I want to make this website look, 
> > trial and error

### `Performance`

> I used 'react-highlight' library to make the code highlighted, and it worked fine, but the problem was that it was re-rendering whole code. rather just the part that was added, which caused a visible slowdown after 200+lines
>
>Also, for some reasons blur:3 was making website jittery on mobiles
>> I have made divided the code into separate lines
> > and made the highlighted component save into state
>
>> As for a blur, I have changed it to blur 4 and made the code bold, this fixed the issue
>
> > Made code shift() 1 line when reached maxLine level (which was calculated height of container
> change)

### `Size`

> I needed for IDE to be in the background, thus used position absolute, but because of it
> I was unable to adjust the height to match the browser dimensions accordingly
>> Created customHook which was taking the dimension of the main-container class, and used it
> to adjust height of the component

### `UseDocumentDimensions`

> It a customHook made to get dimensions of the container, used to calculate maxLines for IDE and for
> adjusting component, the issue was that when I made it I believe that for some reason it was taking
> full dimensions of the container before everything was fully rendered
> > I had to create event listeners inside to take the measurements after everything have been loaded




