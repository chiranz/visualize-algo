import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import ArrayVisualizer from "./ArrayVisualizer";
import { testSortingAlgorithm } from "../../tests/index";
import { mergeSort, getMergeSortAnimation } from "../../algorithtms/mergeSort";

const ANIMATION_SPEED_MS = 10;
// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default function SortingVisualizer() {
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState("");
  const [array, setArray] = useState([]);
  const generateArray = () => {
    let array = [];
    for (let i = 0; i < 150; i++) {
      array.push(Math.floor(Math.random() * (450 - 100 + 1) + 100));
    }
    setArray(array);
    return;
  };

  useEffect(() => {
    generateArray();
  }, []);

  const testAlgorithm = () => {
    for (let i = 0; i < 100; i++) {
      generateArray();
      const success = testSortingAlgorithm(array, mergeSort);
      if (!success) {
        alert("Test Failed");
        return;
      }
    }
    alert(`${100}  tests passed`);
    return;
  };
  const setDefaultState = () => {
    setSorting(false);
    setAlgorithm("");
  };
  const doMergeSort = () => {
    const animations = getMergeSortAnimation(array.slice());
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
    setTimeout(() => {
      setDefaultState();
      setArray(mergeSort(array));
    }, (animations.length + 1) * ANIMATION_SPEED_MS);
  };

  return (
    <div>
      <div>
        {" "}
        {algorithm
          ? `Selected algorithm: ${algorithm}`
          : "Please select algorithm!"}
      </div>
      <ArrayVisualizer color={PRIMARY_COLOR} array={array} />
      <div className="buttons">
        <Button disabled={sorting} onClick={() => generateArray()}>
          Generate New Array
        </Button>
        <Button disabled={sorting} onClick={() => setAlgorithm("Merge Sort")}>
          Merge Sort
        </Button>
        <Button disabled={sorting} onClick={() => setAlgorithm("Quick Sort")}>
          Quick Sort
        </Button>
        <Button
          secondary
          disabled={!algorithm}
          onClick={() => {
            setSorting(!sorting);
            doMergeSort();
          }}
          progress={sorting}
        >
          {sorting ? "Stop!" : "Sort"}
        </Button>
        <Button disabled={sorting} onClick={testAlgorithm}>
          Test Algorithm
        </Button>
      </div>
    </div>
  );
}
