import { Directive, Input, OnChanges, OnDestroy, SimpleChanges, ViewContainerRef } from '@angular/core';
import { TeleportService } from './teleport.service';

@Directive({
  selector: '[teleportOutlet]',
})
export class TeleportOutletDirective implements OnChanges, OnDestroy {
  // We could've also used the `ngAcceptInputType`, but it's being deprecated in newer Angular versions.
  @Input() teleportOutlet: string | null | undefined;

  constructor(private vcr: ViewContainerRef, private service: TeleportService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // The `teleportOutlet` might be `null|undefined`, but we don't want nullable values to be used
    // as keys for the `ports` map.
    if (changes.teleportOutlet && typeof this.teleportOutlet === 'string') {
      this.service.ports.set(this.teleportOutlet, this.vcr);
      this.service.newOutlet(this.teleportOutlet);
    }
  }

  ngOnDestroy(): void {
    this.service.ports.delete(this.teleportOutlet);
  }
}
