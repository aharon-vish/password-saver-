package com.saveyourpassword;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }
    private  final String TAG = MainApplication.class.getSimpleName();
    @Override
    protected List<ReactPackage> getPackages() {
      Log.d(TAG,"asdsadas");
      return Arrays.asList(
              new MainReactPackage(),
              new VectorIconsPackage(),
              new AnExampleReactPackage(),
              new ReactImagePackage(),
              new ReactInputPackage()
      );
    }
  };


  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
