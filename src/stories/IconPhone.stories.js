import IconPhone from '../app/components/icon-phone';

export default {
  title: 'Icon - phone',
  component: IconPhone,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base = {
  args: {
    className: "text-cd-black",
  },
};

