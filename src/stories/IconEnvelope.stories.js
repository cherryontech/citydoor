import IconEnvelope from '../app/components/icon-envelope'

export default {
  title: 'Icon - envelope',
  component: IconEnvelope,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Base = {
  args: {
    className: "text-cd-black",
  },
};

