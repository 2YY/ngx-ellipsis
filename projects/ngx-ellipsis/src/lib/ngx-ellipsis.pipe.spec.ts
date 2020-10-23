import { NgxEllipsisPipe } from './ngx-ellipsis.pipe';

describe('NgxEllipsisPipe', () => {
  let pipe: NgxEllipsisPipe;

  beforeEach(() => {
    pipe = new NgxEllipsisPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('truncate and add ellipsis if over max char count', () => {
    expect(pipe.transform('12345', 3)).toEqual('123…');
  });

  it('do nothing if not over max char count', () => {
    expect(pipe.transform('12345', 10)).toEqual('12345');
  })
});
