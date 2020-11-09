import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Component, Input, NgModule } from '@angular/core';
import { NgxEllipsisModule } from '../lib/ngx-ellipsis.module';

@Component({
	selector: 'lib-example',
	template: `<p>{{
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			| ngxEllipsis: max
	}}</p>`,
	styles: [''],
})
class ExampleComponent {
	@Input() max = 10;
}

@NgModule({
	declarations: [ExampleComponent],
	imports: [NgxEllipsisModule],
	exports: [ExampleComponent],
})
class ExampleModule {}

export default {
	title: 'example/Ellipsis',
	component: ExampleComponent,
	decorators: [
		moduleMetadata({
			imports: [ExampleModule],
		}),
	],
} as Meta;

const Template: Story<ExampleComponent> = (args: ExampleComponent) => ({
	component: ExampleComponent,
	props: args,
});

export const Demo = Template.bind({});
Demo.args = {
	max: 10,
};
