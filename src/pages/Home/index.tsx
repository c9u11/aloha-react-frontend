import { useState } from "react";
import { Calendar } from "../../components/Calendar";
import { Item, ItemProps } from "../../components/Event";
import { HomeContainer, StretchedList } from "./styled";

function Home() {
  const [events, setEvents] = useState<ItemProps[]>([
    {
      title: "컴퓨터공학기초",
      subTitle: "2023.06.30 23:55",
      type: "출석",
      completed: false,
    },
    {
      title: "컴퓨터공학기초",
      subTitle: "2023.06.30 23:55",
      type: "과제",
      completed: false,
    },
    {
      title: "컴퓨터공학기초",
      subTitle: "2023.06.30 23:55",
      type: "출석",
      completed: true,
    },
    {
      title: "컴퓨터공학기초",
      subTitle: "2023.06.30 23:55",
      type: "출석",
      completed: true,
    },
  ]);
  return (
    <HomeContainer>
      <Calendar></Calendar>
      <StretchedList>
        {events.map((event) => (
          <Item
            key={event.title}
            type={event.type}
            title={event.title}
            subTitle={event.subTitle}
            completed={event.completed}
          />
        ))}
      </StretchedList>
    </HomeContainer>
  );
}

export default Home;
