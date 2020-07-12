import React from "react";
import Episodes from "./Episodes";
import {render} from "@testing-library/react";

const mockData = [
    {
        "id": 553946,
        "url": "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
        "name": "Chapter One: The Vanishing of Will Byers",
        "season": 1,
        "number": 1,
        "airdate": "2016-07-15",
        "airtime": "",
        "airstamp": "2016-07-15T12:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
        },
        "summary": "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
        "_links": {"self": {"href": "http://api.tvmaze.com/episodes/553946"}}
    }
]

test("re-renders correctly with episodes", () => {
    const {rerender, queryAllByTestId} = render(<Episodes episodes={[]}/>);
    const episodes = queryAllByTestId(/episode/ig);

    rerender(<Episodes episodes={mockData}/>);
    const newEpisodes = queryAllByTestId(/episode/ig);
    expect(newEpisodes).toHaveLength(1);
});