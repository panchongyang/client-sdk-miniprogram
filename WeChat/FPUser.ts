export class FPUser {
  private key: string;
  private attrs: { [key: string]: string };

  constructor(key?: string) {
    this.key = String(key || Date.now());
    this.attrs = {};
  }

  public with(attrName: string, attrValue: string): FPUser {
    this.attrs[attrName] = attrValue;
    return this;
  }

  public getKey(): string {
    return this.key;
  }

  public getAttrs(): { [key: string]: string } {
    return Object.assign({}, this.attrs);
  }

  public extendAttrs(attrs: { [key: string]: string }): FPUser {
    for (const key in attrs) {
      this.attrs[key] = attrs[key];
    }
    return this;
  }

  public get(attrName: string): string | undefined {
    return this.attrs[attrName];
  }

  public stableRollout(key: string): FPUser {
    this.key = key;
    return this;
  }
}
