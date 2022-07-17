import BaseTemplate from './BaseTemplate'
import { mockBaseTemplateProps } from './BaseTemplate.mocks'

export default {
    title: 'templates/BaseTemplate',
    component: BaseTemplate,
    argTypes: {},
}

const Template = args => <BaseTemplate {...args} />

export const Base = Template.bind({})
Base.args = {
    ...mockBaseTemplateProps.base,
}
